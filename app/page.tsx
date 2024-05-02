import { BlogPosts } from 'app/components/posts';

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Malte Mindedal | Developer
                <div className="flex space-x-2 items-center">
                    <a
                        href="https://www.python.org/"
                        title="Python"
                        target="_blank"
                    >
                        <img
                            src="https://github.com/get-icon/geticon/raw/master/icons/python.svg"
                            alt="Python"
                            width="25px"
                            height="25px"
                        ></img>
                    </a>
                    <a href="https://isocpp.org/" title="C++" target="_blank">
                        <img
                            src="https://github.com/get-icon/geticon/raw/master/icons/c-plusplus.svg"
                            alt="C++"
                            width="25px"
                            height="25px"
                        ></img>
                    </a>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                        title="JavaScript"
                        target="_blank"
                    >
                        <img
                            src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg"
                            alt="JavaScript"
                            width="20px"
                            height="20px"
                        ></img>
                    </a>
                </div>
            </h1>
            <p>Hello! Welcome to my website!</p>
            <br></br>
            <p className="mb-4">
                {`I'm a student and new developer from Sweden. I mostly working with Python and a little C++.
                  I enjoy learning new things and I'm always looking for new projects to work on,
                  currently i'm learning web development with HTML, CSS and JavaScript.
                `}
            </p>
            <p className="mb-4">
                {`Im currently an intern at Stena Fastigheter in Gothenburg, 
                  Sweden. Where i've been working mostly with Python and Azure Cloud Services.
                 
                `}
            </p>
            <p className="mb-4">
                Want to know more? Use the links below to find me on social
                media, blog or check out my resume.
            </p>
            <div className="my-8">
                <BlogPosts />
            </div>
        </section>
    );
}
