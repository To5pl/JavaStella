export default function Demo1Layout({
 children,
}: {
  children: React.ReactNode
  
}) {
  return (
    <div lang="en">
      <a href="/demo1">Home</a> | 
      <a href="/demo1/sub1">Sub 1</a> |
      <a href="/demo1/sub2" >Sub 2</a> |
      <hr/>
      {children}
    </div>
  )
}