import { InjectionToken, Optional, SkipSelf, inject, } from '@angular/core';
/**
 * Define the icons to use
 * @param icons The icons to provide
 */
export function provideIcons(icons) {
    return [
        {
            provide: NgIconsToken,
            useFactory: (parentIcons) => ({
                ...parentIcons?.reduce((acc, icons) => ({ ...acc, ...icons }), {}),
                ...icons,
            }),
            deps: [[NgIconsToken, new Optional(), new SkipSelf()]],
            multi: true,
        },
    ];
}
export const NgIconsToken = new InjectionToken('Icons Token');
/**
 * Inject the icons to use
 * @returns The icons to use
 * @internal
 */
export function injectNgIcons() {
    return inject(NgIconsToken, { optional: true }) ?? [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9wcm92aWRlcnMvaWNvbi5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUNkLFFBQVEsRUFFUixRQUFRLEVBQ1IsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCOzs7R0FHRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBNkI7SUFDeEQsT0FBTztRQUNMO1lBQ0UsT0FBTyxFQUFFLFlBQVk7WUFDckIsVUFBVSxFQUFFLENBQUMsV0FBc0MsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdkQsR0FBRyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2xFLEdBQUcsS0FBSzthQUNULENBQUM7WUFDRixJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN0RCxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQzVDLGFBQWEsQ0FDZCxDQUFDO0FBRUY7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxhQUFhO0lBQzNCLE9BQU8sTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIE9wdGlvbmFsLFxuICBQcm92aWRlcixcbiAgU2tpcFNlbGYsXG4gIGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRGVmaW5lIHRoZSBpY29ucyB0byB1c2VcbiAqIEBwYXJhbSBpY29ucyBUaGUgaWNvbnMgdG8gcHJvdmlkZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUljb25zKGljb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogUHJvdmlkZXJbXSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTmdJY29uc1Rva2VuLFxuICAgICAgdXNlRmFjdG9yeTogKHBhcmVudEljb25zPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdKSA9PiAoe1xuICAgICAgICAuLi5wYXJlbnRJY29ucz8ucmVkdWNlKChhY2MsIGljb25zKSA9PiAoeyAuLi5hY2MsIC4uLmljb25zIH0pLCB7fSksXG4gICAgICAgIC4uLmljb25zLFxuICAgICAgfSksXG4gICAgICBkZXBzOiBbW05nSWNvbnNUb2tlbiwgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpXV0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdO1xufVxuXG5leHBvcnQgY29uc3QgTmdJY29uc1Rva2VuID0gbmV3IEluamVjdGlvblRva2VuPFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXT4oXG4gICdJY29ucyBUb2tlbicsXG4pO1xuXG4vKipcbiAqIEluamVjdCB0aGUgaWNvbnMgdG8gdXNlXG4gKiBAcmV0dXJucyBUaGUgaWNvbnMgdG8gdXNlXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluamVjdE5nSWNvbnMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdIHtcbiAgcmV0dXJuIGluamVjdChOZ0ljb25zVG9rZW4sIHsgb3B0aW9uYWw6IHRydWUgfSkgPz8gW107XG59XG4iXX0=