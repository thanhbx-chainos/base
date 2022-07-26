import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

type Props = {
	title: string;
};

const RoadHeader = (props: Props) => {
	return (
		<div className="bg-[#F9FAFB] flex items-center px-3 py-3 justify-start">
			<span className="cursor-pointer text-sm text-gray-400 pr-2">Home</span>
			<ChevronRightIcon width={12} height={12} />
			<span className="cursor-pointer text-sm text-gray-400 mr-5">
				{props.title}
			</span>
		</div>
	);
};

export default RoadHeader;
