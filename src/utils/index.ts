import moment from "moment";

export function toDisplayDate(date: string) {
  return moment(date, "yyyy-MM-DD'T'hh:mm:ss.SSSSSS'Z'").format("LLL");
}
