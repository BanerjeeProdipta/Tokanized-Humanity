
const HowItWorks = () => {
  return (
    <section id="how-it-works" className="px-8 space-y-8 text-center">
      <span className="text-lg font-bold text-primary">How it works</span>
      <h2 className="text-3xl font-bold font-heading">In just a few minutes</h2>
      <div className="flex flex-wrap items-center -mx-10">
        <div className="relative w-full mb-16 lg:w-1/2 lg:mb-0">
          <div className="relative z-10 ">
            <img className="object-cover w-full rounded-lg"
              src="https://images.pexels.com/photos/7148031/pexels-photo-7148031.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=450&amp;w=940" />
          </div>
          <div className="absolute w-full h-full px-10 rounded-lg top-4 right-4 bg-primary"></div>
        </div>
        <div className="w-full px-10 lg:w-1/2">
          <div className="max-w-lg">
            <ul>
              <li className="flex pb-10 mb-8 border-b border-gray-700">
                <div className="mr-8">
                  <span className="flex items-center justify-center w-10 h-10 text-lg font-bold rounded-full bg-primary/30">1</span>
                </div>
                <div>
                  <h3 className="mb-6 text-lg font-bold">Register account</h3>
                  <p className="opacity-50">Go over to sign up, Fill up the form. Get verified.</p>
                </div>
              </li>
              <li className="flex pb-10 mb-8 border-b border-gray-700">
                <div className="mr-8">
                  <span className="flex items-center justify-center w-10 h-10 text-lg font-bold rounded-full bg-primary/30">2</span>
                </div>
                <div>
                  <h3 className="mb-6 text-lg font-bold">Create campaign</h3>
                  <p className="opacity-50">Craft your story. Its free.</p>
                </div>
              </li>
              <li className="flex pb-10 mb-8 border-b border-gray-700">
                <div className="mr-8">
                  <span className="flex items-center justify-center w-10 h-10 text-lg font-bold rounded-full bg-primary/30">2</span>
                </div>
                <div>
                  <h3 className="mb-6 text-lg font-bold">Share with friends and family
                  </h3>
                  <p className="opacity-50"> People out there want to help you.</p>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HowItWorks