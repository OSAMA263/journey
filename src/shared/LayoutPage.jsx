import tw from 'tailwind-styled-components'

export default function LayoutPage({children,className}) {
  return (
    <Wrapper className={className??""}>{children}</Wrapper>
  )
}

const Wrapper=tw.div`
w-[65%]
mx-auto
space-y-64
`