import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogList } from "../../config/data";
import { Link } from "react-router-dom";
import EmptyList from "../../components/common/EmptyList";
import Chip from "../../components/common/Chip";
import './style.css';

function Blog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        let blog = blogList.find((blog) => blog.id === parseInt(id));

        if (blog) {
            setBlog(blog);
        }
    }, []);

    return (
        <div>
            <Link className="blog-goBack" to="/">
                <span>&#8592;</span> Go back
            </Link>

            {blog ? (
                <div className="blog-wrap">
                    <header>
                        <p className="blog-date">Published {blog.createdAt}</p>
                        <h1>{blog.title}</h1>
                        <div className="blog-subCategory">
                            {blog.subCategory.map((category, index) => (
                                <div>
                                    <Chip key={index} label={category} />
                                </div>
                            ))}
                        </div>
                    </header>
					<img src={blog.cover} alt="" />
					<p className="blog-desc">{blog.description}</p>
                </div>
            ) : (
				<EmptyList />
			)}
        </div>
    );
}

export default Blog;
