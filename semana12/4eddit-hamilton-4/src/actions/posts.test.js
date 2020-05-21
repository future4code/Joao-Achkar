import { setAllPosts, setPostDetails, getPostId } from './posts'


describe ("Post Actions", () => {
    test("Pega posts atualizados da api", ()=>{
        //preparação
        const mockPost = "Opa, eu sou um post"
        //Execução
        const action = setAllPosts(mockPost)
        //Verificação
        expect(action.type).toBe("SET_ALL_POSTS");
        expect(action.payload.post).toBe(mockPost);
    })
    test("Pega os comentários do post", ()=>{
        //preparação
        const mockComentarios = "Opa, eu sou um comment"
        //Execução
        const action = setPostDetails(mockComentarios)
        //Verificação
        expect(action.type).toBe("SET_POST_DETAILS");
        expect(action.payload.comments).toBe(mockComentarios);
    })
    test("Pega o Id de cada post", () => {
        //preparação
        const mockDeId = 1234;
        //execução
        const action = getPostId(mockDeId)
        //verificação
        expect(action.type).toBe("GET_POST_ID")
        expect(action.payload.id).toBe(mockDeId)
    })
})

