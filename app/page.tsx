import {BlogPosts} from 'app/components/posts';

export default function Page() {
    return (
        <section>
            <h1 className="mb-1 text-3xl font-semibold tracking-tighter">
                Malte Mindedal
            </h1>
            <h1 className="mb-1 text-2xl  tracking-tighter">
                Junior Developer / Student / Intern at Stena Fastigheter
            </h1>
            <hr className="mb-3"/>
            <p className="mb-2 text-lg tracking-tighter">
                Junior Developer with a passion for backend development. Currently studying IoT-development at kyh in
                Gothenburg.
            </p>
            <p className="text-lg tracking-tighter">
                Want to know more? Check out projects I've worked on below or use the links in the navigation bar.
            </p>
            <div className="my-8">
                <BlogPosts/>
            </div>
        </section>
    );
}
