import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Form, routeAction$, z, zod$ } from "@builder.io/qwik-city";


export const useLoginAction = routeAction$((data) => {
    console.log(data)
},

zod$({
    name: z.string().min(3),
    email: z.string().email().min(5)
})
)

export default component$(() => {

    const submitForm = useLoginAction()

    return (
        <>
            <div class="flex justify-center">
                <div class="w-6/12">
                    <Form action={submitForm}>
                        <div class="mb-4">
                            <label for="" class="block mb-2">Name</label>
                            <input type="text" name="name" placeholder="Your name" class="input input-bordered w-full max-w-xs" />
                            {submitForm.value?.failed && <p class="text-red-500">{submitForm.value.fieldErrors?.name}</p>}
                        </div>

                        <div class="mb-4">
                            <label for="" class="block mb-2">Email</label>
                            <input type="email" name="email" placeholder="Your email" class="input input-bordered w-full max-w-xs" />
                            {submitForm.value?.failed && <p class="text-red-500">{submitForm.value.fieldErrors?.email}</p>}
                        </div>

                        <button type="submit" class="btn">Valider</button>
                    </Form>
                </div>
            </div>
        </>
    )
})


export const head: DocumentHead = {
    title: "Page Contact",
    meta: [
        {
            name: "description",
            content: "Votre super page de contact"
        } 
    ]
}