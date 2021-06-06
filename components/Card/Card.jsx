import ListItems from "../ListItems/ListItems";

const skills = [
	"HTML5",
	"CSS3",
	"JavaScript",
	"ReactJS",
	"Redux",
	"Node.js",
	"MongoDB",
	"Firebase",
	"Next.js",
	"TailwindCSS",
];

const SkillsCard = () => {
	return (
		<div className="bg-white rounded-md p-4">
			<h2 className="text-lg mb-4">Some of the technologies I work with:</h2>
			<ul className="flex flex-col flex-wrap max-h-72">
				{skills.map((skill) => {
					return <ListItems key={skill} skill={skill} />;
				})}
			</ul>
		</div>
	);
};

export default SkillsCard;
