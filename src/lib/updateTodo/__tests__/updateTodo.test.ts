import updateTodo from "../updateTodo";
import { server } from "@/mocks/node";
import { http, HttpResponse } from "msw";

const mockTodo = {
  userId: 1,
  title: "Wave hello! 👋",
  completed: false,
  id: 1,
};

describe("updateTodo lib function", () => {
  it("should return the updated todo item", async () => {
    const updatedTodo = await updateTodo(mockTodo);
    expect(updatedTodo).toEqual({
      userId: 1,
      title: "Wave hello! 👋",
      completed: true,
      id: 1,
    });
  });

  it("should fail with an error", async () => {
    server.use(
      http.put("/todos/1", () => {
        return new HttpResponse(null, { status: 400 });
      })
    );

    expect.assertions(1);

    try {
      await updateTodo(mockTodo);
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual("Failed to update todo");
      }
    }
  });
});
