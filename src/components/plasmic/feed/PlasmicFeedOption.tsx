// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oAPsVEPE9NjWT8tDm6c68U
// Component: ZSvJdJykEB
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_feed.module.css"; // plasmic-import: oAPsVEPE9NjWT8tDm6c68U/projectcss
import sty from "./PlasmicFeedOption.module.css"; // plasmic-import: ZSvJdJykEB/css

export type PlasmicFeedOption__VariantMembers = {};
export type PlasmicFeedOption__VariantsArgs = {};
type VariantPropType = keyof PlasmicFeedOption__VariantsArgs;
export const PlasmicFeedOption__VariantProps = new Array<VariantPropType>();

export type PlasmicFeedOption__ArgsType = {};
type ArgPropType = keyof PlasmicFeedOption__ArgsType;
export const PlasmicFeedOption__ArgProps = new Array<ArgPropType>();

export type PlasmicFeedOption__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultFeedOptionProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    await promise;
  });

function PlasmicFeedOption__RenderFunc(props: {
  variants: PlasmicFeedOption__VariantsArgs;
  args: PlasmicFeedOption__ArgsType;
  overrides: PlasmicFeedOption__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeedOption__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFeedOption__VariantsArgs;
    args?: PlasmicFeedOption__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFeedOption__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFeedOption__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFeedOption__ArgProps,
          internalVariantPropNames: PlasmicFeedOption__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFeedOption__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeedOption";
  } else {
    func.displayName = `PlasmicFeedOption.${nodeName}`;
  }
  return func;
}

export const PlasmicFeedOption = Object.assign(
  // Top-level PlasmicFeedOption renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFeedOption
    internalVariantProps: PlasmicFeedOption__VariantProps,
    internalArgProps: PlasmicFeedOption__ArgProps
  }
);

export default PlasmicFeedOption;
/* prettier-ignore-end */
