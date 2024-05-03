import { BlogPosts } from 'app/components/posts';

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Malte Mindedal | Developer
            </h1>
            <p className="mb-4">
                {`I'm a student and new developer from Sweden. I mostly working with Python and some C++.
                  I enjoy learning new things and I'm always looking for new projects to work on.
                `}
            </p>
            <p className="mb-4">
                {`Im currently an intern at Stena Fastigheter in Gothenburg, 
                  Sweden. Where i've been working mostly with Python and Azure Cloud Services. 
                `}
            </p>
            <p className="mb-4">
                {`Want to know more? Use the links below to find me on social
                media, read about my projects or check out my resume.
                `}
            </p>
            <div className="my-8">
                <BlogPosts />
            </div>
        </section>
    );
}
