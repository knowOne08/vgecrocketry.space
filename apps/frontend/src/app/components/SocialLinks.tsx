import { IconButton } from "@mui/material";
import React from "react";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useCustomNavigate } from "../utils/useCustomNavigate";
import { colors } from "../tokens";

interface SocialLinkProps {
  color: string;
  fontSize: string | number;
}

const links = [
  { url: "https://x.com/vgecrocketry", Icon: XIcon },
  { url: "https://www.youtube.com/@vgecrocketryteam3924", Icon: YouTubeIcon },
  { url: "https://www.linkedin.com/company/vgec-rocketry-team/", Icon: LinkedInIcon },
  { url: "https://www.instagram.com/vgecrocketry/", Icon: InstagramIcon },
];

export const SocialLinks: React.FC<SocialLinkProps> = ({ color, fontSize }) => {
  const handleNavigate = useCustomNavigate();

  return (
    <div>
      {links.map(({ url, Icon }) => (
        <IconButton
          key={url}
          onClick={() => handleNavigate(url)}
          aria-label={url}
          sx={{
            color,
            transition: "color 0.2s, transform 0.2s",
            "&:hover": {
              color: colors.accent.main,
              transform: "translateY(-2px)",
            },
          }}
        >
          <Icon style={{ fontSize }} />
        </IconButton>
      ))}
    </div>
  );
};
