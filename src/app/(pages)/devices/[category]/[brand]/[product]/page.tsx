import { BodyWrapper } from '@/app/components/body-wrapper'
import { DropdownDevice } from '../../../components/dropdown'
import { HeroDevice } from '../../../components/hero'
import { HighlightDevice } from '../../../components/highlight'
import { SectionNavDevice } from '../../../components/section-nav'
import { GridListDevice } from '../../../components/grid-feature'
import Viewer360 from '@/app/components/360-viewer'
import {
  Sparkles,
  ScanLine,
  Sun,
  Waves,
  Target
} from "lucide-react"
import { BasicCarousel } from '@/app/components/carousels'
import { BeforeAfterDevice } from '../../../components/before-after'

const treatmentList = [
  {
    name: 'Skin Resurfacing, Tone & Texture',
    svgUrl: '/image/Skin-resurfacing.svg',
  },
  {
    name: 'Skin-rejuvenation and Tightening',
    svgUrl: '/image/Skin-rejuvenation-and-tightening.svg',
  },
  {
    name: 'Hair Removal',
    svgUrl: '/image/Hair-removal.svg',
  },
  {
    name: 'Skin Resurfacing, Tone & Texture',
    svgUrl: '/image/Skin-resurfacing.svg',
  },
  {
    name: 'Skin-rejuvenation and Tightening',
    svgUrl: '/image/Skin-rejuvenation-and-tightening.svg',
  },
  {
    name: 'Hair Removal',
    svgUrl: '/image/Hair-removal.svg',
  },
]

const highlightList = [
  {
    name: 'Highlights',
    href: '#some-id',
  },
  {
    name: 'Treatments',
    href: '#some-id',
  },
  {
    name: 'Technology',
    href: '#some-id',
  },
  {
    name: 'Applicators',
    href: '#some-id',
  },
  {
    name: 'Before & After',
    href: '#some-id',
  },
]

const dropdownList = [
  {
    icon: <Sparkles size={30} />,
    title: "Q-Switch",
    body: "The Q-Switch laser precisely targets dermal layers for collagen stimulation and pigmentation treatment, delivering effective rejuvenation with minimal downtime. Alma's unique Q-Switch pixel technology, with five adjustable depths, offers versatile non-ablative skin rejuvenation options.",
  },
  {
    icon: <ScanLine size={30} />,
    title: "Fractional Ablative",
    body: "The fractional ablative laser refines skin resurfacing by creating precise pixel-sized perforations, promoting rejuvenation while preserving surrounding tissue, for faster recovery. It effectively treats signs of aging, photodamage, pigmented lesions, and various types of scars.",
  },
  {
    icon: <Sun size={30} />,
    title: "IPL",
    body: "Leverage IPL's broad spectrum to address diverse skin conditions, like sun damage and vascular lesions. Its strong, targeted absorbency offers a balanced approach to aesthetic improvements across a wide range of patient skin types and concerns.",
  },
  {
    icon: <Waves size={30} />,
    title: "Non-Ablative",
    body: "Rejuvenate skin with non-ablative lasers that stimulate collagen production deep within the dermis. This technology effectively addresses signs of aging, acne, and scars while remaining non-invasive.",
  },
  {
    icon: <Target size={30} />,
    title: "Green Diode",
    body: "Utilizing an optimal wavelength that targets superficial blood vessels, green diode laser enhances both efficacy and safety in precise vascular treatments.",
  },
]

const applicatorList = [
  {
    title: 'ClearLift Pro',
    subTitle: 'Intense Nanosecond Pulses',
    imageUrl: '/image/ClearLift-Pro.jpg',
    text: ' The most comprehensive Q-Switch Nd:YAG treatment solution. This award-winning applicator delivers intense nanosecond pulses to safely target pigmented lesions and tattoos, as well as delivering no-downtime skin rejuvenation treatments.',
  },
  {
    title: 'VascuPen',
    subTitle: ' Comfortable, Precise Treatment',
    imageUrl: '/image/VascuPen.jpg',
    text: ' Pen-shaped green diode laser that offers comfortable and precise treatment of vascular and pigmented lesions. Utilizing an optimal wavelength that targets superficial blood vessels enhances both efficacy and safety in vascular treatments.',
  },
  {
    title: ' Iris Acne',
    subTitle: ' Dual Wavelengths',
    imageUrl: '/image/Iris-Acne.jpg',
    text: ' Broadband IPL targets both the blue wavelengths that combat acne-causing P.acnes bacteria and longer wavelengths for deep penetration to address inflammatory acne.',
  },
  {
    title: 'ClearLift Pro',
    subTitle: 'Intense Nanosecond Pulses',
    imageUrl: '/image/ClearLift-Pro.jpg',
    text: ' The most comprehensive Q-Switch Nd:YAG treatment solution. This award-winning applicator delivers intense nanosecond pulses to safely target pigmented lesions and tattoos, as well as delivering no-downtime skin rejuvenation treatments.',
  },
  {
    title: 'VascuPen',
    subTitle: ' Comfortable, Precise Treatment',
    imageUrl: '/image/VascuPen.jpg',
    text: ' Pen-shaped green diode laser that offers comfortable and precise treatment of vascular and pigmented lesions. Utilizing an optimal wavelength that targets superficial blood vessels enhances both efficacy and safety in vascular treatments.',
  },
  {
    title: ' Iris Acne',
    subTitle: ' Dual Wavelengths',
    imageUrl: '/image/Iris-Acne.jpg',
    text: ' Broadband IPL targets both the blue wavelengths that combat acne-causing P.acnes bacteria and longer wavelengths for deep penetration to address inflammatory acne.',
  },

]

const beforeAfterList = [
  {
    title: 'Colored Tattoo Removal',
    before: {
      title: 'Before1',
      imageUrl: '/image/before-after/AlmaHarmony-before1.webp',
      alt: 'Before1',
    },
    after: {
      title: 'After1',
      imageUrl: '/image/before-after/AlmaHarmony-after1.webp',
      alt: 'After1',
    },
  },
  {
    title: 'Active Acne',
    before: {
      title: 'Before2',
      imageUrl: '/image/before-after/AlmaHarmony-before2.webp',
      alt: 'Before2',
    },
    after: {
      title: 'After2',
      imageUrl: '/image/before-after/AlmaHarmony-after2.webp',
      alt: 'After2',
    },
  },
  {
    title: 'Acne and Acne Scars',
    before: {
      title: 'Before3',
      imageUrl: '/image/before-after/AlmaHarmony-before3.webp',
      alt: 'Before3',
    },
    after: {
      title: 'After3',
      imageUrl: '/image/before-after/AlmaHarmony-after3.webp',
      alt: 'After3',
    },
  },        
]


export default function Page() {
  return (
    <main className=''>
      {/* HERO */}
      <HeroDevice />

      {/* SECTION NAV */}
      <SectionNavDevice
        list={highlightList}
      />

      {/* HIGHLIGHT */}
      <HighlightDevice 
        header='Integrated Technologies. Unlimited Diversity'
        text={"Alma Harmony's strength lies in its seamless integration of top technologies, including Q-Switch laser, fractional ablative laser, IPL, non-ablative laser, and green diode laser. This versatile platform adapts to nearly any indication or skin type, delivering personalized treatments with precision and efficiency for optimal results."}
        image='/image/Alma-Harmony-2.jpg'
        textSide='left'
      />
      <HighlightDevice 
        header='Functional Elegance and Design Clarity'
        text={"From streamlined flow of operation software, to automated features, every element of Alma Harmony has been meticulously designed to enhance efficiency and ease of use."}
        image='/image/Functional-Elegance-and-Design-Clarity-1.jpg'
        textSide='right'
      />
      <HighlightDevice 
        header='Uniting Powerful Lasers in One Platform'
        text={"With up to 45% more laser energy, Alma Harmony combines the power of standalone lasers in one sophisticated system. This boost enhances treatment efficacy and versatility, allowing clinics to address a broad range of conditions with a single platform, streamlining operations while maximizing options."}
        image='/image/Uniting-Powerful-Lasers-in-One-Platform-1.jpg'
        textSide='left'
      />

      <GridListDevice 
        header='Treatments'
        list={treatmentList}
      />

      <BodyWrapper className='bg-linear-to-b my-14'>
        <div className='flex max-lg:flex-col gap-20 lg:gap-10 items-start'>
          <div className='w-full max-w-[80vh] lg:w-180 xl:w-200 2xl:w-250'>
            <Viewer360 
              imgUrlTemplate='/image/360/alma-harmony/alma360_'
              totalFrames={63}
              extension='.webp'
              width={1080}
              height={1080}
            />
          </div>
          <DropdownDevice 
            list={dropdownList}
          />
        </div>
      </BodyWrapper>

      <BodyWrapper className='my-14'>
        <h2 className='h2-format text-center! mb-8'>
          Applicators
        </h2>
        <BasicCarousel 
          list={applicatorList}
        />
      </BodyWrapper>

      <BeforeAfterDevice
        h2='Before & After'
        imageList={beforeAfterList}
      />

    </main>
  )
}
