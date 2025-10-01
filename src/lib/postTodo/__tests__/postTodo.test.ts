import postTodo from "../postTodo";
import { server } from "@/mocks/node";
import { http, HttpResponse } from "msw";

describe("postTodo lib function", () => {
  it("should return the posted todo item", async () => {
    const postedTodo = await postTodo("write tests");
    expect(postedTodo).toEqual({
      userId: 1,
      title: "write tests",
      completed: false,
      id: 5,
    });
  });

  it("should fail with an error", async () => {
    server.use(
      http.post("/todos", () => {
        return new HttpResponse(null, { status: 400 });
      })
    );

    expect.assertions(1);
    try {
      await postTodo("write tests");
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual("Failed to post new todo");
      }
    }
  });
});
