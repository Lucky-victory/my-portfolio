import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const username = "lucky-victory";
    const query = JSON.stringify({
      query: `query Publication {
  publication(host:"blog.devvick.com") {
    posts (first:6){
      edges{
        node {
          coverImage {
            url
          },
          title,
          brief,
          url
        }
      }
    }
  }
}
`,
    });

    const response = await fetch("https://gql.hashnode.com/", {
      method: "post",
      body: query,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const jsonResponse = await response.json();

    const posts = flattenGraphQLResponse(jsonResponse?.data);
    return NextResponse.json({ posts }, { status: 200 });
  } catch (err) {
    console.log({ error: err });

    return NextResponse.json(
      { err, message: "An error occured, please try again..." },
      { status: 500 }
    );
  }
}
interface CoverImage {
  url: string;
}

export interface PostNode {
  coverImage: CoverImage;
  title: string;
  brief: string;
  url: string;
}

interface Edge {
  node: PostNode;
}

interface Posts {
  edges: Edge[];
}

interface PublicationResponse {
  publication: {
    posts: Posts;
  };
}

interface FlattenedPost {
  coverImage: CoverImage;
  title: string;
  brief: string;
  url: string;
}

function flattenGraphQLResponse(
  response: PublicationResponse
): FlattenedPost[] {
  return response.publication.posts.edges.map((edge) => edge.node);
}
