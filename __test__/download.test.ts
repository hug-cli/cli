import { getHTML } from "../src/utils/download"

test("should ", async () => {
    const [html, err] = await getHTML(
        `https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts`
    )
    console.log([html, err])
})
