import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const allowedDeclarations: Record<string, string[]> = {
  'src/components/global/Navigation/index.module.scss': [
    'display: flex',
    'justify-content: space-between',
  ],
  'src/components/molecules/Table/index.module.scss': ['flex: 1 1 0'],
  'src/components/organisms/about/ActivitiesSection/index.module.scss': [
    'align-self: stretch',
    'align-self: stretch',
  ],
  'src/components/organisms/about/SponsorSection/index.module.scss': [
    'gap: 16px',
    'gap: 16px',
    'gap: 32px',
  ],
  'src/components/organisms/recruit/ScheduleCard/index.module.scss': [
    'align-self: stretch',
    'align-self: stretch',
    'flex: 1 1 0',
    'align-self: stretch',
  ],
  'src/components/pages/Activity/index.module.scss': ['gap: 32px', 'gap: 16px'],
  'src/components/pages/People/index.module.scss': ['gap: 32px', 'gap: 16px'],
};

const responsiveFlexContracts: Record<string, string[]> = {
  'src/components/global/Footer/index.tsx': [
    "direction={{ sm: 'column-reverse', lg: 'row' }}",
    "gap={{ sm: '16px', lg: 0 }}",
    "justify={{ sm: 'center', lg: 'space-between' }}",
  ],
  'src/components/global/Navigation/index.tsx': [
    "direction={{ sm: 'column', lg: 'row' }}",
    "justify={{ lg: 'center' }}",
  ],
  'src/components/molecules/Card/index.tsx': [
    "direction={{ sm: 'column', lg: reverse ? 'row-reverse' : 'row' }}",
  ],
  'src/components/molecules/Table/index.tsx': [
    "gap={{ sm: '16px', md: '32px' }}",
    "align={isApplicant ? 'center' : { sm: 'flex-start', md: 'center' }}",
    "direction={isApplicant ? 'row' : { sm: 'column', md: 'row' }}",
  ],
  'src/components/organisms/Faq/index.tsx': [
    "gap={{ sm: '16px', md: '32px' }}",
  ],
  'src/components/organisms/about/ActivitiesSection/index.tsx': [
    "gap={{ sm: '8px', md: '16px' }}",
    "justify={{ sm: 'flex-start', md: 'center' }}",
  ],
  'src/components/organisms/about/ContactSection/index.tsx': [
    "direction={{ sm: 'column', md: 'row' }} gap=\"20px\"",
  ],
  'src/components/organisms/activity/ActiveCard/index.tsx': [
    "asChild direction={{ sm: 'column', md: 'row' }}",
  ],
  'src/components/organisms/home/RecruitmentStatusSection/index.tsx': [
    "justify={{ sm: 'center', md: 'normal' }}",
    "gap={{ sm: '12px', md: '24px' }}",
  ],
  'src/components/organisms/home/SummaryCards/index.tsx': [
    "gap={{ sm: '12px', md: '24px' }}",
    "gap={{ sm: '6px', md: '12px' }}",
  ],
  'src/components/pages/Activity/index.tsx': [
    "gap={{ sm: '8px', md: '16px' }}",
    "gap={{ sm: '16px', md: '32px' }}",
  ],
  'src/components/pages/Home/index.tsx': ["gap={{ sm: 0, md: '16px' }}"],
  'src/components/pages/People/index.tsx': ["gap={{ sm: '8px', md: '16px' }}"],
};

const legacyFlexDeclaration =
  /^\s*(display:\s*(?:inline-)?flex|flex-direction:\s*[^;]+|justify-content:\s*[^;]+|align-items:\s*[^;]+|flex-wrap:\s*[^;]+|gap:\s*[^;]+|align-self:\s*[^;]+|order:\s*[^;]+|flex:\s*[^;]+);?\s*$/gm;

function getFiles(directory: string, extension: string): string[] {
  return readdirSync(resolve(process.cwd(), directory), {
    withFileTypes: true,
  }).flatMap((entry) => {
    const file = join(directory, entry.name);

    if (entry.isDirectory()) return getFiles(file, extension);
    return entry.name.endsWith(extension) ? [file] : [];
  });
}

function readSource(file: string) {
  return readFileSync(resolve(process.cwd(), file), 'utf8');
}

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function getLegacyFlexDeclarations(file: string) {
  return [...readSource(file).matchAll(legacyFlexDeclaration)].map((match) =>
    normalizeWhitespace(match[1]),
  );
}

describe('responsive Flex migration contract', () => {
  it.each(Object.entries(responsiveFlexContracts))(
    'keeps the responsive prop mapping in %s',
    (file, expectedProps) => {
      const source = normalizeWhitespace(readSource(file));

      expectedProps.forEach((expectedProp) => {
        expect(source).toContain(normalizeWhitespace(expectedProp));
      });
    },
  );

  it.each(getFiles('src', '.module.scss'))(
    'keeps only explicitly unsupported legacy declarations in %s',
    (file) => {
      expect(getLegacyFlexDeclarations(file)).toEqual(
        allowedDeclarations[file] ?? [],
      );
    },
  );
});
