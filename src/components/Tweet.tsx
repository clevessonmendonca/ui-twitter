interface Props {
  user: string,
  content: string
}

export function Tweet({user, content}: Props) {
  return (
    <div>Tweet by {user}
      <p>{content}</p>
      <button>Like</button>
    </div>
  )
}