import * as Templates from "../../templates";

export const withTemplate = (template: string, Component: any) => {
  const TemplateEnvolve = (Templates as any)[template];
  return (
    <TemplateEnvolve>
      <Component />
    </TemplateEnvolve>
  );
};
