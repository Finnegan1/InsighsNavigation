import { Link } from "@tanstack/react-router"

/**
* @see https://v0.dev/t/Xj8DOdSOSS6
*/
export function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="w-full h-20 flex items-center justify-between px-6 bg-white dark:bg-gray-800">
        <div className="flex items-center space-x-4">
          <CompassIcon className="h-8 w-8 text-blue-500 dark:text-blue-300" />
          <h1 className="text-2xl font-bold text-blue-500 dark:text-blue-300">Insights Navigation</h1>
        </div>
        <nav className="space-x-4">
          <Link className="text-gray-500 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-300" href="#">
            Features
          </Link>
          <a className="text-gray-500 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-300" href="#">
            Testimonials
          </a>
          <Link className="text-gray-500 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-300" to="/signUp">
            Sign Up
          </Link>
        </nav>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Chart Your Data Journey
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Insights Navigation is an innovative survey tool that helps you create, analyze, and discover insights
                from your data.
              </p>
            </div>
            <img
              alt="Digital Network"
              className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
              height="600"
              src="/placeholder.svg"
              width="1200"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <PencilIcon className="h-12 w-12 text-blue-500 dark:text-blue-300" />
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Create</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Design and launch effective surveys with our intuitive survey builder.
              </p>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
                href="#"
              >
                Learn More
              </a>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <BarChartIcon className="h-12 w-12 text-blue-500 dark:text-blue-300" />
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Analyze</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Make sense of your data with our powerful analytics and reporting tools.
              </p>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
                href="#"
              >
                Learn More
              </a>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <MicroscopeIcon className="h-12 w-12 text-blue-500 dark:text-blue-300" />
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Discover</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Uncover hidden insights and trends with our advanced data exploration features.
              </p>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            What Our Users Say
          </h2>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3 mt-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <img
                alt="User Testimonial"
                className="aspect-[1/1] overflow-hidden rounded-full object-cover object-center"
                height="100"
                src="/placeholder.svg"
                width="100"
              />
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                "Insights Navigation has transformed the way we conduct surveys. It's easy to use and provides powerful
                analytics."
              </p>
              <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">Jane Doe, Data Analyst</h3>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <img
                alt="User Testimonial"
                className="aspect-[1/1] overflow-hidden rounded-full object-cover object-center"
                height="100"
                src="/placeholder.svg"
                width="100"
              />
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                "The survey builder is intuitive and the reporting tools are very comprehensive. Highly recommended!"
              </p>
              <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">John Smith, Researcher</h3>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <img
                alt="User Testimonial"
                className="aspect-[1/1] overflow-hidden rounded-full object-cover object-center"
                height="100"
                src="/placeholder.svg"
                width="100"
              />
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                "Insights Navigation has been a game changer for our team. The data exploration features are amazing."
              </p>
              <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">Sarah Lee, Project Manager</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-500 dark:bg-blue-700">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Ready to Chart Your Data Journey?
            </h2>
            <a
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-500 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
              href="#"
            >
              Sign Up Now
            </a>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Already have an account?
              <a className="underline text-white" href="#">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}


function MicroscopeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}


function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}
