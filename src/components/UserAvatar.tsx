import { User } from "next-auth";
import { FC } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { Icons } from "./Icons";
import { AvatarProps } from "@radix-ui/react-avatar";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "name" | "image">;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative w-full h-full aspect-square">
          <Image
            src={user.image}
            fill
            alt="Profile picture"
            referrerPolicy="no-referrer"
          ></Image>
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
          <Icons.user className="w-4 h-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
