import { ChevronRightIcon } from "@heroicons/react/solid";

const ListItems = ({ skill }) => {
	return (
		<li className="flex items-center space-x-3 mb-4">
			<span className="bg-gray-300 rounded-full flex items-center justify-center">
				<ChevronRightIcon className="h-10 w-10 text-white" />
			</span>
			<p>{skill}</p>
		</li>
	);
};

export default ListItems;
