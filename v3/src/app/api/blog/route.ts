import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const username='lucky-victory'
      const query = JSON.stringify({
        query: `{
                      user(username: "${username}") {
                        publication {
                          posts(page: 0) {
                            _id
                            cuid
                            coverImage
                            title
                            slug
                            brief
                          }
                      }
                  }
              }`,
      });

      const response = await fetch("https://api.hashnode.com/", {
        method: "post",
        body: query,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const { posts } = jsonResponse?.data?.user?.publication;
      return NextResponse.json(
        { posts },
        { status: 200 }
      );
  } catch (err) {
    return NextResponse.json(
      { err, message: "An error occured, please try again..." },
      { status: 500 }
    );
  }
}
