interface outputSchema {
    /**
     * @examples [1]
     */
        id: number,

    /**
     * @examples ["ashok"]
     */
        name: string,

    /**
     * @examples [true]
     */
        is_smart: boolean,

      /**
     * @examples [true]
     */
        is_notify_on_change: boolean,

      site: {
     /**
     * @examples [1]
     */
         id: number, 
         /**
     * @examples ["ashok"]
     */
         name: string },
        
        users: {
           /**
     * @examples [1]
     */
         id: number,
         /**
     * @examples ["ashok"]
     */
         username: string,
         /**
     * @examples ["ashok"]
     */
         full_name: string,
         /**
     * @examples [1]
     */
         phone_number: number,
         /**
     * @examples ["ashok"]
     */
         email_address: string
      }[]
}