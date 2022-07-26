import React from "react";
import RoadHeader from "../../components/roadheader/RoadHeader";

const TheContent = ({ title, children }: any) => {
	return (
		<>
			<div className="w-full">
				<div className="flex-1 min-w-0">
					{title && <RoadHeader title={title} />}
					<div className="p-10">{children}</div>
				</div>
			</div>
		</>
	);
};

export default TheContent;
