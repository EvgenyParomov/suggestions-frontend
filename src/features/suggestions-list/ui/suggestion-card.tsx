import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

type Tag = {
  id: number;
  label: string;
};

type Status = {
  id: number;
  label: string;
};

export function SuggestionCard({
  title,
  description,
  tags,
  status,
}: {
  title: string;
  description: string;
  tags: Tag[];
  status: Status;
}) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography>{description}</Typography>
        <Typography>Теги: {tags.map((v) => v.label).join(", ")}</Typography>
        <Typography>Статус: {status.label}</Typography>
      </CardContent>
    </Card>
  );
}
