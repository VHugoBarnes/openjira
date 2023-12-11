import React from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { EntriesContext } from "@/context/entries";

export const NewEntry = () => {
  const [isAdding, setIsAdding] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const { addEntry } = React.useContext(EntriesContext);

  const handleSaveEntry = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inputValue.length === 0) return;

    addEntry(inputValue);
    setIsAdding(false);
    setTouched(false);
    setInputValue("");
  };

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {
        isAdding
          ? (

            <>
              <TextField
                fullWidth
                sx={{ marginTop: 2, marginBottom: 1 }}
                placeholder="Aa"
                autoFocus
                multiline
                label="New Entry"
                value={inputValue}
                helperText={inputValue.length <= 0 && touched && "Enter a Value"}
                error={inputValue.length <= 0 && touched}
                onChange={handleTextFieldChange}
                onBlur={() => setTouched(true)}
              />
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="text"
                  onClick={() => { setIsAdding(false); }}
                >
                  Cancelar
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  endIcon={<SaveOutlinedIcon />}
                  onClick={handleSaveEntry}
                >
                  Guardar
                </Button>
              </Box>
            </>
          )
          : (
            <Button
              startIcon={<AddCircleOutlineOutlinedIcon />}
              fullWidth
              variant="outlined"
              onClick={() => { setIsAdding(true); }}
            >
              Add task
            </Button>
          )
      }
    </Box>
  );
};