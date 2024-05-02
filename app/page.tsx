import { BlogPosts } from 'app/components/posts';

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Malte Mindedal | Portfolio
            </h1>
            <p>
                Hey! I'm Malte.
            </p>
            <br></br>
            <p className="mb-4">
                {`I'm a new developer from Sweden. I mostly working with Python and a little C++.
                  I enjoy learning new things and I'm always looking for new projects to work on,
                  currently i'm learning web development with HTML, CSS and JavaScript.
          `}
            </p>
            <p>
                Connect with be on Linkedin!
            </p>
            <br></br>
            <div className="my-8">
                <BlogPosts />
            </div>
        </section>
    );
}
