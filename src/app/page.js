import Nav2 from "./components/navbar2";
export default function Home() {
  return (
    <>
      <Nav2 />
      <div className="relative">
        <img
          className="mx-auto h-max"
          src="https://images.pexels.com/photos/6177562/pexels-photo-6177562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <h1 className="absolute top-1/4 left-1/3 text-9xl font-bold text-orange-600">
          Ableton
        </h1>
      </div>
      <div className="p-10 flex flex-col justify-center">
        <div className="flex justify-center">
          <p className="w-2/4 text-2xl font-semibold">
            We make <span className="text-blue-600">Live</span>,{" "}
            <span className="text-blue-600">Push</span> and{" "}
            <span className="text-blue-600">Link</span> — unique software and
            hardware for music creation and performance. With these products,
            our community of users creates amazing things.
          </p>
        </div>

        <div className="flex justify-center py-10">
          <p className="w-2/4">
            Ableton was founded in 1999 and released the first version of Live
            in 2001. Our products are used by a community of dedicated
            musicians, sound designers, and artists from across the world.
          </p>
        </div>
      </div>
      <div className="h-screen w-screen">
        <div className="flex justify-center w-screen content-center">
          <img
            className="w-auto absolute left-28 my-10"
            src="https://picsum.photos/600"
            alt=""
            srcset=""
          />
        </div>

        <div className=" flex justify-end">
          <div className=" h-screen w-2/3 bg-yellow-200 ">
            <div className="flex justify-items-center justify-center content-center h-screen">
              <img
                className="m-auto h-80"
                src="https://picsum.photos/500"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 flex flex-col justify-center">
        <div className="flex justify-center">
          <p className="w-2/4 text-2xl font-semibold">
            Making music isn’t easy. It takes time, effort, and learning. But
            when you’re in the flow, it’s incredibly rewarding.
          </p>
        </div>

        <div className="flex justify-center py-10">
          <p className="w-2/4">
            We feel the same way about making Ableton products. The driving
            force behind Ableton is our passion for what we make, and the people
            we make it for.
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center content-center">
          <div className="w-3/6 h-80 bg-gray-200"></div>
        </div>
        <div className="flex justify-center">
          <p>Why Ableton - Juanpe Bolivar</p>
        </div>
      </div>
      <div className="p-10 flex flex-col justify-center">
        <div className="flex justify-center">
          <p className="w-2/4 text-2xl font-semibold">
            We are more than 350 people from 30 different countries divided
            between our headquarters in Berlin and our offices in Los Angeles
            and Tokyo.
          </p>
        </div>

        <div className="flex justify-center py-10">
          <p className="w-2/4">
            Most of us are active musicians, producers, and DJs, and many of us
            use Live and Push every day. We come from a wide range of cultural
            and professional backgrounds. Some of us have PhDs, some are
            self-taught, and most of us are somewhere in between. What connects
            us is the shared belief that each of us has the skills and knowledge
            to contribute to something big: helping to shape the future of music
            culture.
          </p>
        </div>
      </div>

      <div className="flex px-32">
        <div className="h-96 w-1/2 bg-slate-200">
          <img className="h-96 w-full" src="https://picsum.photos/500" alt="" srcset="" />
        </div>
        <div className="w-1/2 h-96 bg-blue-300 flex justify-center content-center">
          <div className="flex justify-center content-center h-full">
            <div className="w-2/3">
              <p className="py-10">
                We’re really proud of the work we’ve done so far. But there’s so
                much more to come. If you’d like to be a part of it, please join
                us.
              </p>
              <a className=" text-blue-600 py-2 rounded-md">
                See Latest Jobs {">"}
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="bg-gray-200 my-24" />
    </>
  );
}
