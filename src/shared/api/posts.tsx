import { createEffect } from 'effector'

const slugs = ['foo', 'bar', 'baz', '1', '2', '3', '4', '5', '6']

const posts = {
    foo: { slug: 'foo', title: 'Foo post', text: 'Hoho you found me!' },
    bar: { slug: 'bar', title: 'Bar post', text: 'Hoho you found me!' },
    baz: { slug: 'baz', title: 'Baz post', text: 'Hoho you found me!' },
    1: { slug: '1', title: '1 post', text: 'Hoho you found me!' },
    2: { slug: '2', title: '2 post', text: 'Hoho you found me!' },
    3: { slug: '3', title: '3 post', text: 'Hoho you found me!' },
    4: { slug: '4', title: '4 post', text: 'Hoho you found me!' },
    5: { slug: '5', title: '5 post', text: 'Hoho you found me!' },
    6: { slug: '6', title: '6 post', text: 'Hoho you found me!' },
} as const

type Post = typeof posts[keyof typeof posts]

const getPostsFx = createEffect(({ limit = 3 }) => {
    return new Promise<Post[]>((r) =>
        setTimeout(
            r,
            1000,
            slugs.slice(0, limit).map((slug) => posts[slug])
        )
    )
})

const getPostFx = createEffect((slug: string) => {
    return new Promise<Post>((res, rej) =>
        setTimeout(() => {
            if (slug in posts) {
                return res(posts[slug])
            }
            rej()
        }, 1000)
    )
})

export const PostsApi = {
    getPostsFx,
    getPostFx,
}
