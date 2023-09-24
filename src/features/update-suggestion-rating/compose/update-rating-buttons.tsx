import { Stack, Badge, ButtonGroup, Button } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export function UpdateRatingButtons() {
  return (
    <Stack spacing={2} direction={"row"} sx={{ mt: 2 }}>
      <Badge color="primary" badgeContent={4}>
        <GradeIcon sx={{ color: "secondary" }} />
      </Badge>
      <ButtonGroup>
        <Button onClick={() => {}}>
          <RemoveIcon fontSize="small" />
        </Button>
        <Button onClick={() => {}}>
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
