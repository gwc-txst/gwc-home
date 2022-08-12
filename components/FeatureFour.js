/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Inclusivity",
    description:
      "Students of all genders, skill levels, and majors are welcome",
    icon: GlobeAltIcon,
  },
  {
    name: "Community",
    description:
      "We will create a safe space for everyone to learn how to code",
    icon: ScaleIcon,
  },
  {
    name: "Beginner Friendly",
    description:
      "A place where beginners can seek help, and learn foundational skills",
    icon: LightningBoltIcon,
  },
  {
    name: "Interview and Career Prep",
    description:
      "We will give you the tools and guidance to nail your dream job",
    icon: AnnotationIcon,
  },
];

export default function FeatureFour() {
  return (
    <div className="pb-24 pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-gwc-blue-deeper font-semibold tracking-wide uppercase">
            Girls Who Code Texas State
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Philosophy
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Empowering female and non-binary students to close the gender gap in
            tech
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gwc-blue text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
