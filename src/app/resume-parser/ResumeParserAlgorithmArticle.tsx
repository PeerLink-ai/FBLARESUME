import { isBold } from "lib/parse-resume-from-pdf/extract-resume-from-sections/lib/common-features";
import {
  Badge,
  Heading,
  Link,
  Paragraph,
  Table,
} from "components/documentation";
import type {
  Line,
  Lines,
  ResumeSectionToLines,
  TextItem,
  TextItems,
  TextScores,
} from "lib/parse-resume-from-pdf/types";
import { extractProfile } from "lib/parse-resume-from-pdf/extract-resume-from-sections/extract-profile";

export const ResumeParserAlgorithmArticle = ({
  textItems,
  lines,
  sections,
}: {
  textItems: TextItems;
  lines: Lines;
  sections: ResumeSectionToLines;
}) => {
  const getBadgeContent = (item: TextItem) => {
    const X1 = Math.round(item.x);
    const X2 = Math.round(item.x + item.width);
    const Y = Math.round(item.y);
    let content = `X₁=${X1} X₂=${X2} Y=${Y}`;
    if (X1 === X2) {
      content = `X=${X2} Y=${Y}`;
    }
    if (isBold(item)) {
      content = `${content} Bold`;
    }
    if (item.hasEOL) {
      content = `${content} NewLine`;
    }
    return content;
  };
  const step1TextItemsTable = [
    ["#", "Text Content", "Metadata"],
    ...textItems.map((item, idx) => [
      idx + 1,
      item.text,
      <Badge key={idx}>{getBadgeContent(item)}</Badge>,
    ]),
  ];

  const step2LinesTable = [
    ["Lines", "Line Content"],
    ...lines.map((line, idx) => [
      idx + 1,
      line.map((item, idx) => (
        <span key={idx}>
          {item.text}
          {idx !== line.length - 1 && (
            <span className="select-none font-extrabold text-sky-400">
              &nbsp;&nbsp;{"|"}&nbsp;&nbsp;
            </span>
          )}
        </span>
      )),
    ]),
  ];

  const { profile, profileScores } = extractProfile(sections);
  const Scores = ({ scores }: { scores: TextScores }) => {
    return (
      <>
        {scores
          .sort((a, b) => b.score - a.score)
          .map((item, idx) => (
            <span key={idx} className="break-all">
              <Badge>{item.score}</Badge> {item.text}
              <br />
            </span>
          ))}
      </>
    );
  };
  const step4ProfileFeatureScoresTable = [
    [
      "Resume Attribute",
      "Text (Highest Feature Score)",
      "Feature Scores of Other Texts",
    ],
    ["Name", profile.name, <Scores key={"Name"} scores={profileScores.name} />],
    [
      "Email",
      profile.email,
      <Scores key={"Email"} scores={profileScores.email} />,
    ],
    [
      "Phone",
      profile.phone,
      <Scores key={"Phone"} scores={profileScores.phone} />,
    ],
  ];

  return (
    <article className="mt-10">
      <Heading className="text-primary !mt-0 border-t-2 pt-8">
        In-depth Look at the Resume Parser Algorithm
      </Heading>
      <Paragraph smallMarginTop={true}>
        This section is for the technically inclined and will provide an in-depth explanation of the ResumeReady parser algorithm, going through the four steps of how it operates. (Note: the algorithm is designed for parsing single-column resumes in English.)
      </Paragraph>
      {/* Step 1. Read the text items from a PDF file */}
      <Heading level={2}>Step 1. Extract text items from the PDF file</Heading>
      <Paragraph smallMarginTop={true}>
        A PDF file is a standardized file format defined by the{" "}
        <Link href="https://www.iso.org/standard/51502.html">
          ISO 32000 specification
        </Link>
        . When you open a PDF file with a text editor, the raw content appears encoded and is hard to read. To view it in a readable format, a PDF reader is necessary to decode and display the file. Similarly, the resume parser first decodes the PDF file to extract its text content.
      </Paragraph>
      <Paragraph>
        While it’s possible to develop a custom PDF reader according to the ISO 32000 specification, it's easier to utilize an existing library. In this case, the resume parser leverages Mozilla's open-source{" "}
        <Link href="https://github.com/mozilla/pdf.js">pdf.js</Link> library to initially extract all text items from the file.
      </Paragraph>
      <Paragraph>
        The table below lists {textItems.length} text items that have been extracted from the added resume PDF. Each text item includes the text content as well as some metadata about it, such as its x, y coordinates on the page, whether the font is bolded, or if it starts a new line. (Note: x,y coordinates are relative to the bottom left corner of the page, which is the origin 0,0)
      </Paragraph>
      <div className="mt-4 max-h-72 overflow-y-scroll border scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-w-3">
        <Table
          table={step1TextItemsTable}
          className="!border-none"
          tdClassNames={["", "", "md:whitespace-nowrap"]}
        />
      </div>
      {/* Step 2. Group text items into lines */}
      <Heading level={2}>Step 2. Organize text items into lines</Heading>
      <Paragraph smallMarginTop={true}>
        The extracted text items aren’t ready to be used just yet and have two main issues:
      </Paragraph>
      <Paragraph>
        <span className="mt-3 block font-semibold">
          Issue 1: They contain unwanted noise.
        </span>
        Some single text items can be split into multiple ones, as you might notice in the table above. For example, a phone number "(123) 456-7890" might be broken into three text items: "(123) 456", "-", and "7890".
      </Paragraph>
      <Paragraph smallMarginTop={true}>
        <span className="font-semibold">Solution:</span> To address this issue, the resume parser merges adjacent text items into one if their distance is smaller than the average typical character width, where
        <span
          dangerouslySetInnerHTML={{
            __html: `<math display="block">
                        <mrow>
                            <mn>Distance </mn>
                            <mo>=</mo>
                            <mn>RightTextItemX₁</mn>
                            <mo>-</mo>
                            <mn>LeftTextItemX₂</mn>
                        </mrow>
                    </math>`,
          }}
          className="my-2 block text-left text-base"
        />
        The average typical character width is calculated by dividing the sum of all text items' widths by the total number of characters of the text items (excluding bolded texts and new line elements to avoid skewing the results).
      </Paragraph>
      <Paragraph>
        <span className="mt-3 block font-semibold">
          Issue 2: They lack context and associations.
        </span>
        When reading a resume, we scan it line by line. Our brains can process each section through visual cues such as text boldness and proximity, allowing us to quickly associate texts that are close together as related. However, the extracted text items currently don’t have those contexts or associations and are just disjointed elements.
      </Paragraph>
      <Paragraph smallMarginTop={true}>
        <span className="font-semibold">Solution:</span> To solve this problem, the resume parser rebuilds those contexts and associations similarly to how our brain processes a resume. It first groups text items into lines since we read text line by line, then it groups lines into sections, which will be discussed in the next step.
      </Paragraph>
      <Paragraph>
        By the end of step 2, the resume parser extracts {lines.length} lines from the added resume PDF, as shown in the table below. The result is more readable when displayed in lines. (Some lines may contain multiple text items, separated by a blue vertical divider{" "}
        <span className="select-none font-extrabold text-sky-400">
          &nbsp;{"|"}&nbsp;
        </span>
        )
      </Paragraph>
      <div className="mt-4 max-h-96 overflow-y-scroll border scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-w-3">
        <Table table={step2LinesTable} className="!border-none" />
      </div>
      {/* Step 3. Group lines into sections */}
      <Heading level={2}>Step 3. Organize lines into sections</Heading>
      <Paragraph smallMarginTop={true}>
        In step 2, the resume parser begins constructing context and associations by grouping text items into lines. Step 3 continues this process by grouping lines into sections.
      </Paragraph>
      <Paragraph>
        Note that every section (except the profile section) begins with a section title that occupies the entire line. This pattern is common not just in resumes but also in books and blogs. The resume parser uses this pattern to group lines with the closest section title above them.
      </Paragraph>
      <Paragraph>
        The resume parser applies certain heuristics to detect a section title. The primary heuristic determines a section title if it meets all three of the following conditions: <br />
        1. It is the only text item in the line <br />
        2. It is <span className="font-bold">bolded</span> <br />
        3. Its letters are all UPPERCASE
        <br />
      </Paragraph>
      <Paragraph>
        In simple terms, if a text item is both bolded and uppercase, it is most likely a section title in a resume. This is generally true for well-formatted resumes. There can be exceptions, but in those cases, the use of bolded and uppercase text might not be appropriate.
      </Paragraph>
      <Paragraph>
        The resume parser also has a fallback heuristic if the main heuristic doesn’t apply. The fallback heuristic mainly performs a keyword match against a list of common resume section title keywords.
      </Paragraph>
      <Paragraph>
        By the end of step 3, the resume parser identifies the sections in the resume and groups the lines under the associated section title, as shown in the table below. Note that{" "}
        <span className="font-bold">the section titles are bolded</span> and{" "}
        <span className="bg-teal-50">
          the lines associated with the section are highlighted with matching colors
        </span>
        .
      </Paragraph>
      <Step3SectionsTable sections={sections} />
      {/* Step 4. Extract resume from sections */}
      <Heading level={2}>Step 4. Extract resume data from sections</Heading>
      <Paragraph smallMarginTop={true}>
        Step 4 is the final step of the resume parsing process and represents the core of the resume parser, where it extracts resume information from the sections.
      </Paragraph>
      <Heading level={3}>Feature Scoring System</Heading>
      <Paragraph smallMarginTop={true}>
        The core of the extraction engine is a feature scoring system. Each resume attribute to be extracted has custom feature sets, where each feature set consists of a feature matching function and a feature matching score if matched (the feature matching score can be either positive or negative). To compute the final feature score of a text item for a specific resume attribute, the text item is run through all its feature sets, and the matching feature scores are summed up. This process is performed for all text items within the section, and the text item with the highest computed feature score is identified as the extracted resume attribute.
      </Paragraph>
      <Paragraph>
        As an example, the table below shows three resume attributes in the profile section of the added resume PDF.
      </Paragraph>
      <Table table={step4ProfileFeatureScoresTable} className="mt-4" />
      {(profileScores.name.find((item) => item.text === profile.name)?.score ||
        0) > 0 && (
        <Paragraph smallMarginTop={true}>
          In the added resume PDF, the name attribute is likely to be "
          {profile.name}" as its feature score is{" "}
          {profileScores.name.find((item) => item.text === profile.name)?.score}
          , which is the highest feature score among all text items in the
          profile section. (Some text items' feature scores may be negative,
          indicating they are very unlikely to be the targeted attribute)
        </Paragraph>
      )}
      <Heading level={3}>Feature Sets</Heading>
      <Paragraph smallMarginTop={true}>
        Having discussed the feature scoring system, let's dive deeper into how feature sets are constructed for a resume attribute. There are two guiding principles: <br />
        1. A resume attribute's feature sets are designed in relation to all other resume attributes within the same section. <br />
        2. A resume attribute's feature sets are manually crafted based on its characteristics and the likelihood of each characteristic.
      </Paragraph>
      <Paragraph>
        The table below lists some of the feature sets for the name attribute. It includes feature functions that match the name attribute with a positive feature score, as well as feature functions that only match other resume attributes in the section with a negative feature score.
      </Paragraph>
      <Table
        table={step4NameFeatureSetsTable}
        title="Name Feature Sets"
        className="mt-4"
      />
      <Heading level={3}>Core Feature Function</Heading>
      <Paragraph smallMarginTop={true}>
        Each resume attribute has multiple feature sets. These can be found in the source code under the extract-resume-from-sections folder, and we won't list them all here. Typically, each resume attribute has a core feature function that strongly identifies it, so we'll list out the core feature function below.
      </Paragraph>
      <Table table={step4CoreFeatureFunctionTable} className="mt-4" />
      <Heading level={3}>Special Case: Subsections</Heading>
      <Paragraph smallMarginTop={true}>
        The last noteworthy aspect is subsections. For the profile section, all text items can be directly passed to the feature scoring system. However, for other sections, such as education and work experience, the section must first be divided into subsections since there may be multiple schools or work experiences listed. The feature scoring system then processes each subsection to retrieve each resume attribute and appends the results.
      </Paragraph>
      <Paragraph smallMarginTop={true}>
        The resume parser applies certain heuristics to detect a subsection. The main heuristic identifies a subsection if the vertical gap between two lines is larger than the typical line gap * 1.4, as a well-formatted resume usually creates a new empty line break before starting the next subsection. There is also a fallback heuristic that checks if the text item is bolded if the main heuristic does not apply.
      </Paragraph>
      <Paragraph>
        And that's a wrap on the ResumeReady parser algorithm :)
      </Paragraph>
      <Paragraph>
        Written by <Link href="https://instagram.com/drew.mcmorrow/">Andrew McMorrow</Link> in August 2024
      </Paragraph>
    </article>
  );
};

const step4NameFeatureSetsTable = [
  ["Feature Function", "Feature Matching Score"],
  ["Contains only letters, spaces, or periods", "+3"],
  ["Is bolded", "+2"],
  ["Contains all uppercase letters", "+2"],
  ["Contains @", "-4 (match email)"],
  ["Contains a number", "-4 (match phone)"],
  ["Contains ,", "-4 (match address)"],
  ["Contains /", "-4 (match URL)"],
];

const step4CoreFeatureFunctionTable = [
  ["Resume Attribute", "Core Feature Function", "Regex"],
  ["Name", "Contains only letters, spaces, or periods", "/^[a-zA-Z\\s\\.]+$/"],
  [
    "Email",
    <>
      Matches email format xxx@xxx.xxx
      <br />
      xxx can be anything but spaces
    </>,
    "/\\S+@\\S+\\.\\S+/",
  ],
  [
    "Phone",
    <>
      Matches phone format (xxx)-xxx-xxxx <br /> () and - are optional
    </>,
    "/\\(?\\d{3}\\)?[\\s-]?\\d{3}[\\s-]?\\d{4}/",
  ],
  [
    "Location",
    <>Matches city and state format {"City, ST"}</>,
    "/[A-Z][a-zA-Z\\s]+, [A-Z]{2}/",
  ],
  ["Url", "Matches URL format xxx.xxx/xxx", "/\\S+\\.[a-z]+\\/\\S+/"],
  ["School", "Contains a school keyword, e.g., College, University, School", ""],
  ["Degree", "Contains a degree keyword, e.g., Associate, Bachelor, Master", ""],
  ["GPA", "Matches GPA format x.xx", "/[0-4]\\.\\d{1,2}/"],
  [
    "Date",
    "Contains a date keyword related to year, month, seasons, or the word Present",
    "Year: /(?:19|20)\\d{2}/",
  ],
  [
    "Job Title",
    "Contains a job title keyword, e.g., Analyst, Engineer, Intern",
    "",
  ],
  ["Company", "Is bolded or doesn’t match job title & date", ""],
  ["Project", "Is bolded or doesn’t match date", ""],
];

const Step3SectionsTable = ({
  sections,
}: {
  sections: ResumeSectionToLines;
}) => {
  const table: React.ReactNode[][] = [["Lines", "Line Content"]];
  const trClassNames = [];
  let lineCounter = 0;
  const BACKGROUND_COLORS = [
    "bg-red-50",
    "bg-yellow-50",
    "bg-orange-50",
    "bg-green-50",
    "bg-blue-50",
    "bg-purple-50",
  ] as const;
  const sectionsEntries = Object.entries(sections);

  const Line = ({ line }: { line: Line }) => {
    return (
      <>
        {line.map((item, idx) => (
          <span key={idx}>
            {item.text}
            {idx !== line.length - 1 && (
              <span className="select-none font-extrabold text-sky-400">
                &nbsp;&nbsp;{"|"}&nbsp;&nbsp;
              </span>
            )}
          </span>
        ))}
      </>
    );
  };

  for (let i = 0; i < sectionsEntries.length; i++) {
    const sectionBackgroundColor = BACKGROUND_COLORS[i % 6];
    const [sectionTitle, lines] = sectionsEntries[i];
    table.push([
      sectionTitle === "profile" ? "" : lineCounter,
      sectionTitle === "profile" ? "PROFILE" : sectionTitle,
    ]);
    trClassNames.push(`${sectionBackgroundColor} font-bold`);
    lineCounter += 1;
    for (let j = 0; j < lines.length; j++) {
      table.push([lineCounter, <Line key={lineCounter} line={lines[j]} />]);
      trClassNames.push(sectionBackgroundColor);
      lineCounter += 1;
    }
  }

  return (
    <div className="mt-4 max-h-96 overflow-y-scroll border scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-w-3">
      <Table
        table={table}
        className="!border-none"
        trClassNames={trClassNames}
      />
    </div>
  );
};
