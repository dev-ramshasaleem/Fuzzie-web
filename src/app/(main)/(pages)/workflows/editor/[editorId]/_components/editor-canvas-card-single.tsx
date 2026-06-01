import { EditorCanvasCardType } from "@/lib/types";
import { useEditor } from "@/provider/editor-provider";
import { Position, useNodeId } from "@xyflow/react";
import React, { useMemo } from "react";
import EditorCanvasIconHelper from "./editor-canvas-icon-helper";
import CustomHandle from "./custom-handle";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

type Props = {};

const EditorCanvasCardSingle = ({ data }: { data: EditorCanvasCardType }) => {
  const { dispatch, state } = useEditor();
  const nodeId = useNodeId();
  const logo = useMemo(() => {
    return <EditorCanvasIconHelper type={data.type} />;
  }, [data]);
  return (
    <>
      {data.type !== "Trigger" && data.type !== "Google Drive" && (
        <CustomHandle
          type="target"
          position={Position.Top}
          style={{ zIndex: 100 }}
        />
      )}
      <Card
        onClick={(e) => {
          e.stopPropagation();
          const val = state.editor.elements.find((n) => n.id === nodeId);
          if (val)
            dispatch({
              type: "SELECTED_ELEMENT",
              payload: {
                element: val,
              },
            });
        }}
        className="relative max-w-[400px] min-w-[280px] dark:border-muted-foreground/70"
      >
        <CardHeader className="flex flex-row items-center gap-4 flex-nowrap p-4">
          <div className="flex-shrink-0">{logo}</div>
          <div className="overflow-hidden">
            <CardTitle className="text-md truncate">{data.title} </CardTitle>
            <CardDescription>
              <p className="text-sm text-muted-foreground/50 truncate">
                <b className="text0muted-foreground/80">ID: </b>
                {nodeId}
              </p>
              <p className="truncate">{data.description}</p>
            </CardDescription>
          </div>
        </CardHeader>
        <Badge variant="secondary" className="absolute right-2 top-2">
          {data.type}
        </Badge>
        <div
          className={clsx("absolute left-3 top-4 h-2 w-2 rounded-full", {
            "bg-green-500": Math.random() < 0.6,
            "bg-orange-500": Math.random() >= 0.6 && Math.random() < 0.8,
            "bg-red-500": Math.random() >= 0.8,
          })}
        ></div>
      </Card>
      <CustomHandle type="source" position={Position.Bottom} id="a" />
    </>
  );
};

export default EditorCanvasCardSingle;
