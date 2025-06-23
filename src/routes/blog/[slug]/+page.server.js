import { error } from '@sveltejs/kit';
import { posts } from '../data.js';
import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';

export const prerender = true;

export async function entries() {
    // Tell SvelteKit to prerender all blog post slugs
    return posts.map(post => ({ slug: post.slug }));
}

export async function load({ params }) {
    const post = posts.find((post) => post.slug === params.slug);

    if (!post) error(404);

    const mdPath = path.join(process.cwd(), 'static', 'blog_scripts', `${post.slug}.md`);
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