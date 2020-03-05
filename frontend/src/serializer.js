import React from 'react';

export const serializer = {
	types: {
		video: ({ node }) => <video src={node.url}></video>,
		image: ({ node }) => <img src={node.url} />
	}
}