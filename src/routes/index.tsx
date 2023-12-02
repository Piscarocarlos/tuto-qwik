import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {

  const counter = useSignal(0);

  const student = useStore({
    name: "Carlos",
    age: 15,
    isGoodStudent: true
  });

  const increment = $(() => {
    counter.value++
  })

  const changeName = $(() => {
    student.name = "Eudoxie"
  })

  const names = useStore<any>({
    items: []
  })

  const addName = $(() => {
    names.items.push("carlos")
  })

  return (
    <>
      <h1 class="text-2xl">{counter.value}</h1>
      <button class="btn btn-primary" onClick$={increment}>Incrementer</button>

      <div class="card mt-4 p-3 w-52 bg-slate-300">
        <h2>Nom : {student.name}</h2>
        <h3>Age: {student.age}</h3>
        <h4>{student.isGoodStudent ? "Très bon étudiant" : "Comme Moussa"}</h4>
        <button class="btn btn-neutral" onClick$={changeName}>Change Name</button>
      </div>


      <div class="card mt-4 p-3 w-52 bg-slate-300">
        <button class="btn btn-neutral" onClick$={addName}>Ajouter Name</button>

        <ul>
          {
            names.items.map((item: string, key: number) => {
              return <>
                  <li>{item} {key}</li>
              </>
            })
          }
        </ul>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Accueil",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
