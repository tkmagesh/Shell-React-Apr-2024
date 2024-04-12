import { useSelector } from "react-redux";

function useBugs() {
  const bugData = useSelector(({ bugs, projects }) => {
    return {
      projects: projects,
      bugs: bugs.map((bug) => ({
        ...bug,
        projectName: projects.find((project) => project.id === bug.projectId)
          .name,
      })),
      closedCount: bugs.reduce(
        (prevResult, bug) => (bug.isClosed ? prevResult + 1 : prevResult),
        0
      ),
    };
  });
  return bugData;
}

export default useBugs;