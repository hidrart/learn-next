import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postdirectory = path.join(process.cwd(), 'posts');

export function getSortedPostData() {
	const filenames = fs.readdirSync(postdirectory);
	const allpost = filenames.map((filename) => {
		const id = filename.replace(/\.md$/, '');
		const fullpath = path.join(postdirectory, filename);
		const content = fs.readFileSync(fullpath, 'utf8');
		const matterResult = matter(content);

		return {
			id,
			...matterResult.data,
		};
	});

	return allpost.sort(({ date: a }, { date: b }) => {
		if (a > b) {
			return 1;
		} else if (a < b) {
			return -1;
		} else {
			return 0;
		}
	});
}
