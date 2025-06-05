import { Listing } from "../types/Listing";

export interface IStorage {
  getAllListings(): Promise<Listing[]>;
}
