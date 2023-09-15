export default function WelcomeBanner(props: { text: string }) {
  return (
    <div className="px-4 py-2 bg-gradient-to-r w-fit text-white text-xl from-blue-300 to-purple-nav-from">
      {props.text}
    </div>
  );
}
