type TweetProps = {
  text: string
}

export function Tweet({ text }: TweetProps) {
  return (
    <div>{text}</div>
  )
}
