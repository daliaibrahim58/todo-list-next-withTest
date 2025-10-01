import { Todo } from "@/types/Todo";
import { http, HttpResponse } from "msw";

export const handlers = [
  // GET /todos
  http.get("/todos", () => {
    return HttpResponse.json(
      [
        {
          userId: 1,
          title: "Wave hello! 👋",
          completed: false,
          id: 1,
        },
        {
          userId: 1,
          title: "Get Coffee ☕☕☕",
          completed: false,
          id: 2,
        },
        {
          userId: 1,
          title: "Go to Work ⚒",
          completed: false,
          id: 3,
        },
        {
          userId: 1,
          title: "Write Code 💻",
          completed: false,
          id: 4,
        },
      ],
      { status: 200 }
    );
  }),

  // POST /todos
  http.post("/todos", async ({ request }) => {
    const body = (await request.json()) as { title: string };

    return HttpResponse.json(
      {
        userId: 1,
        title: body.title, // ✅ extract the string only
        completed: false,
        id: 5,
      },
      { status: 201 }
    );
  }),

  // PUT /todos/:id
  http.put("/todos/:id", async ({ request }) => {
    const { id, userId, title, completed } = (await request.json()) as Todo;

    return HttpResponse.json(
      {
        userId,
        title,
        completed,
        id,
      },
      { status: 200 }
    );
  }),

  // DELETE /todos/:id
  http.delete("/todos/:id", async ({ params }) => {
    const { id } = params;

    return HttpResponse.json(
      {
        id: Number(id),
      },
      { status: 200 }
    );
  }),
];
