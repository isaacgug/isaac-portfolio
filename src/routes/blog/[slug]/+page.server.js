import { error } from '@sveltejs/kit';
import { posts } from '../data.js';
import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';

export async function load({ params }) {
    const post = posts.find((post) => post.slug === params.slug);

    if (!post) error(404);

    const mdPath = path.resolve('static/blog_scripts', `${post.slug}.md`);
    let content = '';

    try {
        const md = await fs.readFile(mdPath, 'utf-8');
		content = marked(md);
    } catch (e) {
        content = '<p>Blog post not found.</p>';
    }

    return {
        post: {
            ...post,
            content
        }
    };
}