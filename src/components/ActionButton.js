import React from "react";
import {
  Container,
  Button,
  lightColors,
  darkColors
} from "react-floating-action-button";

export const ActionButton = ({
  edit,
  importStub,
  enable,
  disable,
  hasDelete,
  createStub,
  editStub,
  duplicateStub,
  deleteStub,
  disableStub,
  enableStub,
  shareStub,
  shareGroupStub
}) => {
  return (
    <Container>
      {/* <Button
        href="#"
        tooltip="Import a HAR"
        styles={{
          backgroundColor: darkColors.cyan,
          color: lightColors.white
        }}
        onClick={importStub}
        icon="fa fa-cloud-upload"
      /> */}
      <Button
        href="#"
        tooltip="Create new stub"
        styles={{
          backgroundColor: darkColors.cyan,
          color: lightColors.white
        }}
        onClick={createStub}
        icon="fa fa-plus"
      />
      {edit && (
        <Button
          href="#"
          tooltip="Duplicate new stub"
          styles={{
            backgroundColor: darkColors.cyan,
            color: lightColors.white
          }}
          onClick={duplicateStub}
          icon="fa fa-copy"
        />
      )}
      {hasDelete && (
        <Button
          href="#"
          tooltip="Delete stub"
          onClick={deleteStub}
          icon="fa fa-trash"
        />
      )}
      {edit && (
        <Button
          href="#"
          onClick={editStub}
          tooltip="Edit mapping"
          icon="fa fa-pencil"
          styles={{
            backgroundColor: darkColors.teal,
            color: lightColors.white
          }}
          disabled={!edit}
        />
      )}
      {disable && (
        <Button
          href="#"
          tooltip="Enable this stub"
          styles={{
            backgroundColor: darkColors.blue,
            color: lightColors.green
          }}
          onClick={enableStub}
          icon="fa fa-eye"
        />
      )}
      {enable && (
        <Button
          href="#"
          tooltip="Disable this stub"
          styles={{
            backgroundColor: darkColors.orange,
            color: lightColors.purple
          }}
          onClick={disableStub}
          icon="fa fa-ban"
        />
      )}
      {hasDelete && (
        <Button
          href="#"
          tooltip="Share this stub to context"
          onClick={shareStub}
          icon="fa fa-share"
          styles={{
            backgroundColor: darkColors.cyan,
            color: lightColors.white
          }}
        />
      )}
       {hasDelete && (
        <Button
          href="#"
          tooltip="Share group to context"
          onClick={shareGroupStub}
          icon="fa fa-share-square-o"
          styles={{
            backgroundColor: darkColors.cyan,
            color: lightColors.white
          }}
        />
      )}
      <Button
        styles={{
          backgroundColor: darkColors.blue,
          color: lightColors.green
        }}
        tooltip="What do you want?"
        icon="fa fa-rocket"
        style={{ color: "green" }}
        rotate={true}
      />
    </Container>
  );
};
