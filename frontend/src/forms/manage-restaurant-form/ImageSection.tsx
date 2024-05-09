import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
  const { control, watch } = useFormContext();

  const existingImageUrl = watch("imageUrl");

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Image</h2>
        <FormDescription>
          Add image that will be displayed on your restaurant listing in the
          search results. Adding a new will overwrite the existing one
        </FormDescription>
        <div className="flex flex-col gap-8 w-[50%]">
          {existingImageUrl && (
            <AspectRatio ratio={16 / 9}>
              <img
                src={existingImageUrl}
                alt=""
                className="rounded-md object-cover h-full w-full"
              />
            </AspectRatio>
          )}
          <FormField
            control={control}
            name="imageFile"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="bg-white"
                    type="file"
                    accept=".jpeg,.png,.jpg"
                    onChange={(event) => {
                      field.onChange(
                        event.target.files ? event.target.files[0] : null
                      );
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
