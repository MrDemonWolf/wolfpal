export default function ({ redirect }) {
  if (!process.env.REGISTRATION) {
    return redirect('/')
  }
}
