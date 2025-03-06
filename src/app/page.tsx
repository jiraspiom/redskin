import HeaderComp from '@/components/header-comp'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import {
  ArrowRight,
  AlertTriangle,
  HelpCircle,
  Mail,
  DollarSign,
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <HeaderComp />

      <div className="flex min-h-screen flex-col p-4 ">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className=" px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    We Will Do <span className="text-red-600">NOTHING</span> For
                    You!
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Read to find out how we've perfected the art of doing
                    absolutely nothing while taking your money!
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      Pledge Money
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline">
                      Get Nothing
                    </Button>
                  </div>
                </div>
                <div className="mx-auto lg:ml-auto">
                  <img
                    alt="Person doing nothing"
                    className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="800"
                    width="800"
                    src="/red.png"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Mission Statement Section */}
          <section
            id="mission"
            className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950"
          >
            <div className=" px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 dark:bg-red-800/20 dark:text-red-400">
                    Mission Statement
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Our Commitment to Nothing
                  </h2>
                </div>
              </div>
              <div className="mx-auto max-w-3xl mt-8 space-y-6 text-center">
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  Here with the Redskins we will do{' '}
                  <span className="font-bold">absolutely nothing</span> for you.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  By pledging us the money to do absolutely nothing, we will
                  give you exactly what we promise. Nothing. We will even tell
                  you to go screw yourselves. This is our commitment.
                </p>
                <div className="flex justify-center mt-8">
                  <Card className="w-full max-w-md bg-red-50 dark:bg-red-900/20">
                    <CardHeader>
                      <CardTitle className="text-center text-red-600">
                        Our Promise
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-2xl font-bold">We Promise To Do</p>
                      <p className="text-5xl font-extrabold mt-4 mb-4 text-red-600">
                        NOTHING
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        And we're very good at it.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Rewards Section */}
          <section
            id="rewards"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
          >
            <div className=" px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 dark:bg-red-800/20 dark:text-red-400">
                    Rewards
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Pledge Levels
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    You can take a look at some of our reward levels to see and
                    choose what is a good fit for you.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">$1 or more</CardTitle>
                    <div className="text-center text-sm text-gray-500 mt-2">
                      715 backers
                    </div>
                  </CardHeader>
                  <div className="flex flex-col flex-1">
                    <CardContent className="space-y-4 flex flex-col flex-1 justify-between">
                      <p className="text-center">
                        We will give you our utmost gratitude for allowing us to
                        do nothing for you.
                      </p>

                      <form action="https://www.paypal.com/donate">
                        <input
                          type="hidden"
                          name="business"
                          value="jiraspiom@gmail.com"
                        />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input type="hidden" name="amount" value="1.00" />
                        <Button type="submit" className="w-full">
                          Pledge Now
                        </Button>
                      </form>
                    </CardContent>
                  </div>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">$8 or more</CardTitle>
                    <div className="text-center text-sm text-gray-500 mt-2">
                      554 backers
                    </div>
                  </CardHeader>
                  <div className="flex flex-col flex-1">
                    <CardContent className="space-y-4 flex flex-col flex-1 justify-between">
                      <p className="text-center">
                        Thank you and we will do absolutely nothing for you.
                      </p>

                      <form action="https://www.paypal.com/donate">
                        <input
                          type="hidden"
                          name="business"
                          value="jiraspiom@gmail.com"
                        />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input type="hidden" name="amount" value="8.00" />
                        <Button type="submit" className="w-full">
                          Pledge Now
                        </Button>
                      </form>
                    </CardContent>
                  </div>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">$15 or more</CardTitle>
                    <div className="text-center text-sm text-gray-500 mt-2">
                      450 backers
                    </div>
                  </CardHeader>
                  <div className="flex flex-col flex-1">
                    <CardContent className="space-y-4 flex flex-col flex-1 justify-between">
                      <p className="text-center">
                        You think you may be getting something but you will get
                        absolutely nothing.
                      </p>
                      <form action="https://www.paypal.com/donate">
                        <input
                          type="hidden"
                          name="business"
                          value="jiraspiom@gmail.com"
                        />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input type="hidden" name="amount" value="15.00" />
                        <Button type="submit" className="w-full">
                          Pledge Now
                        </Button>
                      </form>
                    </CardContent>
                  </div>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">$25 or more</CardTitle>
                    <div className="text-center text-sm text-gray-500 mt-2">
                      535 backers
                    </div>
                  </CardHeader>
                  <div className="flex flex-col flex-1">
                    <CardContent className="space-y-4 flex flex-col flex-1 justify-between">
                      <p className="text-center">Absolutely nothing.</p>
                      <form action="https://www.paypal.com/donate">
                        <input
                          type="hidden"
                          name="business"
                          value="jiraspiom@gmail.com"
                        />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input type="hidden" name="amount" value="25.00" />
                        <Button type="submit" className="w-full">
                          Pledge Now
                        </Button>
                      </form>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Risks Section */}
          <section
            id="risks"
            className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950"
          >
            <div className=" px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 dark:bg-red-800/20 dark:text-red-400">
                    Risks
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    What Could Go Wrong?
                  </h2>
                </div>
              </div>
              <div className="mx-auto max-w-3xl mt-8 flex justify-center">
                <Card className="w-full max-w-md">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                    <CardTitle>Risk Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xl">
                      Absolutely nothing.
                    </CardDescription>
                    <p className="mt-4 text-gray-500">
                      There are no risks because we're not doing anything. We
                      can't fail at doing nothing. It's our specialty.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section
            id="faq"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
          >
            <div className=" px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 dark:bg-red-800/20 dark:text-red-400">
                    FAQ
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Frequently Asked Questions
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    For any questions and comments please contact us.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-3xl mt-8 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <HelpCircle className="mr-2 h-5 w-5 text-red-600" />
                      What do you actually do?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Nothing. Absolutely nothing. That's our promise.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <HelpCircle className="mr-2 h-5 w-5 text-red-600" />
                      Why should I give you money?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      You probably shouldn't. But if you do, we promise to do
                      nothing with it.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <HelpCircle className="mr-2 h-5 w-5 text-red-600" />
                      Is this a joke?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We take doing nothing very seriously.</p>
                  </CardContent>
                </Card>
                <div className="mt-12 text-center">
                  <h3 className="text-xl font-bold mb-4">
                    Still have questions?
                  </h3>
                  <div className="flex justify-center">
                    <Button className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-red-600 text-white">
            <div className=" px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Get Nothing?
              </h2>
              <p className="mx-auto max-w-[700px] mt-4 text-lg text-red-100">
                Join thousands of satisfied customers who have received
                absolutely nothing from us.
              </p>

              <div className="mt-8">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-red-600 hover:bg-red-50"
                >
                  Pledge Now
                  <DollarSign className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full border-t bg-background py-6 md:py-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-red-600" />
              <span className="text-xl font-bold">Redskins</span>
            </div>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 md:text-left">
              © {new Date().getFullYear()} Redskins Company. Doing absolutely
              nothing since 2003.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-primary dark:text-gray-400"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-primary dark:text-gray-400"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-primary dark:text-gray-400"
              >
                Go Screw Yourself
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
